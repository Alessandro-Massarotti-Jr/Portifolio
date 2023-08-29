
import { IKnowage } from "../config/knowages";
import { Icon } from "@iconify/react";


interface IKnowageItemProps {
    knowage: Omit<IKnowage, "type">;
}

export default function KnowledgeItem({ knowage }: IKnowageItemProps) {

    return (
        <li className="flex">
            <a className="flex gap-1 items-center list-disc hover:scale-90 text-white hover:text-gray-200 transition-all" href={knowage.link} target="_blank">
                <Icon icon={knowage.icon} width={32} height={32} />
                {knowage.title}
            </a>
        </li>
    )

}