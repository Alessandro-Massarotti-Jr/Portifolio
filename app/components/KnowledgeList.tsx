
import { IKnowage, TKnowageType } from "../config/knowages";
import { Icon } from "@iconify/react";
import KnowledgeItem from "./KnowledgeItem";


interface IKnowageItemProps {
    knowages: IKnowage[];
    type: TKnowageType;
    title: string;
}

export default function KnowledgeList({ knowages, type, title }: IKnowageItemProps) {

    const currentItems = knowages.filter((knowage) => knowage.type === type);

    return (
        <div className="flex flex-col m-10 gap-4">
            <h3 className="text-white text-lg font-bold">{title}</h3>
            <ul className="flex flex-col gap-2 list-disc">
                {currentItems.map((knowage) => {
                    return (<KnowledgeItem key={knowage.title} knowage={knowage} />);
                })}
            </ul>
        </div>
    )
}