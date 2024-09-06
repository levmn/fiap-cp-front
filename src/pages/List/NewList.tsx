import { useState } from "react";
import { Input } from "../../components/Input/Input";
import { Layout } from "../../components/Layout/Layout";
import { itemMock } from "../../mocks/itemMock";

export default function NewList() {
    const [itemName, setItemName] = useState<string>();
    const [hasAddedItem, setHasAddedItem] = useState<boolean>(false);
    const [itemList, setItemList] = useState(itemMock);
    const [alreadyAdded, setAlreadyAdded] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(event.target.value);
    }

    const handleClick = () => {
        setHasAddedItem(true);
        console.log('Adicionar item');

        if (itemList.find((item) => item.name === itemName)) {
            setAlreadyAdded(true);
            return;
        }
    }

    return (
        <Layout>
            <h1>Nova Lista</h1>

            <form>
                {/* <label htmlFor="newItem">Adicionar Item</label> */}
                <Input
                    label="Adicionar Item"
                    type="text" id="newItem"
                    name="newItem"
                    placeholder="Digite o item desejado"
                    value={itemName}
                    onChange={handleChange}
                />

                <button type="button" onClick={handleClick}>
                    Adicionar
                </button>
            </form>

            <ul>
                {itemList.map((item) => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </Layout>
    )
}