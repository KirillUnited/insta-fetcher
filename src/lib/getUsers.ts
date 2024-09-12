export default async function getUsers() {
    const url = `${process.env.NEXT_PUBLIC_DOMAIN}/api/users`;
    const result: Array<any> = [];

    try {
        const res = await fetch(url, {
            method: "GET",
        });

        if (!res.ok) throw new Error("Failed to fetch data: " + res.statusText);

        const data = await res.json();

        result.push(...data);
    } catch (error) {
        console.log(error);
    }

    return result;
}