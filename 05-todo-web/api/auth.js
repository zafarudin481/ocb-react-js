export const registerUser = async ({
    username,
    email,
    password
}) => {
    try {
        // call API optimistically

        // console.log({
        //     username,
        //     email,
        //     password
        // })

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });

        const data = await response.json();

        return data;

    } catch (error) {
        console.log(error);
    }
};