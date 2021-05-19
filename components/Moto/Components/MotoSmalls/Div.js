import { isEmpty } from "lodash";
import Link from "next/link";
import { Button } from "antd"

export default function MotoDiv ({
    item,
    defaultStyle,
    defaultClassName,
    defaultButtonClassName
}) {
    
    if(isEmpty(item?.value)) return null;
    
    const MyDiv = () => (
        <div 
            className={`${defaultClassName}`}
            style={{
                ...defaultStyle
            }}
        >
            {item?.value}
        </div>
    )

    return (
        <>
            {isEmpty(item.hyperlink) 
                ? (
                    <MyDiv />
                )
                : (
                    <Link href={item.hyperlink}>
                        <Button className={`${defaultButtonClassName} rounded-full`}>
                            <MyDiv />
                        </Button>
                    </Link>
                )
        
            }
        </>
    )

}