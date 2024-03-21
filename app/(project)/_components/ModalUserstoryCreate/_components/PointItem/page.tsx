import { useState } from "react"

interface PointItemProps {
    title: string
}

const PointItem = ({ title }: PointItemProps) => {
    const points = [`?`, `0`, `1/2`, `1`, `2`, `3`, `5`, `8`, `10`, `13`, `20`, `40`];
    const [popupShown, setPopupShown] = useState(false);
    const [value, setValue] = useState('?');

    const handleClickPoint = (e: any, point: string) => {
        e.stopPropagation();
        setPopupShown(false);
        setValue(point);
    }

    return <>
        <li title="UX" className="text-[.875rem] bg-[#f9f9fb] flex justify-between mb-[1.6px] min-h-[2rem] p-2 relative cursor-pointer" onClick={() => setPopupShown(true)}>
            <span className="text-[#70728f]">{title}</span>
            <span className="text-[#4c566a] overflow-hidden text-ellipsis">{value}</span>
            <ul className={`visible ${popupShown ? `block` : `hidden`} text-[.875rem] bg-white border border-[#d8dee9] rounded text-[#008aa8] left-2 p-2  absolute top-[100%] z-[2] w-[188px]`}>
                {
                    points.map((point, idx) =>
                        <li className="inline-flex m-0 p-0" key={idx}
                            onClick={(e) => handleClickPoint(e, point)}>
                            <a className="items-center text-[#008aa8] flex h-[2.5rem] justify-center transition-all duration-250 w-[2.5rem] p-1">
                                <span className="item-text">{point}</span>
                            </a>
                        </li>
                    )
                }
            </ul>
        </li>
    </>
}

export default PointItem;