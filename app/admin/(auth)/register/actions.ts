"use server";

export async function registerAction(
    prevState: any,
    formData: FormData
) {
    
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const retypePassword = formData.get("retype_password") as string;
    const name = formData.get("name") as string;
    const phoneNumber = formData.get("phone_number") as string;

    const errors: Record<string, string> = {};

    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (password && password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }
    if (!retypePassword) errors.retype_password = "Password is required";
    if (password !== retypePassword) {
        errors.retype_password = "Passwords do not match";
    }
    if(!name) errors.name = "Name is required";
    if(!phoneNumber) errors.phone_number = "Phone number is required";

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    

    return { success: true };
}
