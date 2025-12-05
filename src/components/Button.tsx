type Props = React.ComponentProps<"button"> & {
    Isloading?: boolean;
};


export function Button({ Isloading, children, type = "submit", ...rest }: Props) {
    return (
        <button type={type} {...rest} disabled={Isloading}
         className=" flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 
         transition ease-linear disabled:opacity-50 disabled:cursor-progress h-12" 
         >
            {children}
        </button>
    )

}