export default async function getUsers() {
    const result: Array<any> = [];

    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/users`, {
            method: "GET",
        }).then((res) => res.json());

        result.push(...data);
    } catch (error) {
        console.log(error);
    }

    return result;
}