import {type ReactNode} from "react";

export default function MainComponent({children}: { children: ReactNode }) {
    return <div className='w-full'>{children}</div>
}