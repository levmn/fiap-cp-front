import { useEffect, useState } from "react";
import { Input } from "../../components/Input/Input";
import { Layout } from "../../components/Layout/Layout";
import { itemMock } from "../../mocks/itemMock";
import { toast, Toaster } from "sonner";

interface Item {
    id: number;
    name: string;
}

export default function NewList() {
    const [itemName, setItemName] = useState<string>();
    const [hasAddedItem, setHasAddedItem] = useState<boolean>(false);
    const [itemList, setItemList] = useState<Item[]>(() => {
        const savedItems = localStorage.getItem('itemList');
        return savedItems ? JSON.parse(savedItems) : itemMock;
    });

    useEffect(() => {
        localStorage.setItem('itemList', JSON.stringify(itemList));
    }, [itemList]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(event.target.value);
    }

    const handleClick = () => {
        setHasAddedItem(true);

        if (itemList.find((item) => item.name === itemName)) {
            setHasAddedItem(true);

            return toast.warning('Item já adicionado!');
        }

        const newItem = {
            id: Math.random(),
            name: itemName || ''
        }

        setItemList([...itemList, newItem]);
        setItemName('');
        toast.success('Item adicionado com sucesso!');
    }

    return (
        <Layout>
            <h1 style={{ color: '#38aede', fontSize: '24px'}}>Nova Lista</h1>

            <form>
                <Input
                    label="Adicionar Item"
                    type="text"
                    id="newItem"
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
                    <li key={item.id}  >
                        {item.name}
                    </li>
                ))}
            </ul>

            <Toaster position="bottom-right" richColors />
        </Layout>
    )
}