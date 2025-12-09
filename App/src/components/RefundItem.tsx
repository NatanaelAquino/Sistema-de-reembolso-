
export type RedunItemProps ={
    id: string
    name: string
    description: string
    amout: string
    categoryImg: string

}

type Props = React.ComponentProps<"a">&{
    data: RedunItemProps
}

export function RefundItem({data,...rest}:Props){

    return(
        <a {...rest}
            className="flex items-center gap-3 hover:bg-green-100/5 cursor-pointer rounded-md p-2"
        >
            <img src= {data.categoryImg} alt="Icone da categoria"  className="w-8 h-8"/>


            <div className="flex flex-col flex-1">
                <strong className="text-sm text-gray-100">{data.name}</strong>
                <strong className="text-xs text-gray-200">{data.description}</strong>
            </div>
            <span className="text-sm text-gray-100 font-semibold">
                <small className="font-normal text-gray-200">R$</small>
                {data.amout}
            </span>
        </a>
    )
    
}