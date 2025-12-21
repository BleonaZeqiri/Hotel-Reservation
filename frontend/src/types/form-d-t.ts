
export type IRegisterForm = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type IResetForm = {
    password: string;
    confirmPassword: string;
}

export type ILoginForm = {
    email: string;
    password: string;
}

export type ICheckoutForm = {
    country: string;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    address: string;
}

export type IReviewForm = {
    comment: string;
}

export type IContactForm = {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    subject?: string;
    message: string;
}

export type IBlogCommentForm = {
    name: string;
    email: string;
    comment: string;
}