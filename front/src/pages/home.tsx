import {InputComponent, PasswordInputComponent} from "@/components/InputComponent";
import { DivHome } from "@/styles/home.style";

export default function Home() {
    return (
        <DivHome>
            <div>
                <h1>RelNeet</h1>
                <form>
                    <InputComponent fieldName="Email" type="text"/>
                    <PasswordInputComponent  fieldName="Password"/>
                </form>
            </div>
        </DivHome>
    )
}