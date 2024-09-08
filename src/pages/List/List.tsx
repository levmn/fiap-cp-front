import { useEffect, useState } from "react";
import { Input } from "../../components/Input/Input";
import { Layout } from "../../components/Layout/Layout";
import { itemMock } from "../../mocks/itemMock";
import { toast, Toaster } from "sonner";
import { ItemDiv, ItemList, ItemWrapper, StyledButtonIcon, StyledForm } from "../../styles/Form.styles";
import { IoMdAddCircleOutline } from "react-icons/io";

interface Item {
    id: number;
    name: string;
}

export default function NewList() {
    const [itemName, setItemName] = useState<string>("");
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
        if (!itemName || itemName.trim() === "") {
            return toast.warning('Por favor, insira um nome de item válido!');
        }

        if (itemList.find((item) => item.name.toLowerCase() === itemName.toLowerCase())) {
            setHasAddedItem(false);
            return toast.warning('Item já adicionado!');
        }

        const newItem = {
            id: Math.random(),
            name: itemName || ''
        };

        setItemList([...itemList, newItem]);
        setItemName('');
        setHasAddedItem(true);
        toast.success('Item adicionado com sucesso!');
    };

    return (
        <Layout>
            <h1 style={{ color: '#38aede', fontSize: '24px' }}>Nova Lista</h1>

            <StyledForm>
                <Input
                    label="Adicionar Item"
                    type="text"
                    id="newItem"
                    name="newItem"
                    placeholder="Digite o item desejado"
                    value={itemName}
                    onChange={handleChange}
                />

                <StyledButtonIcon onClick={handleClick}>
                    <IoMdAddCircleOutline size="2rem" color="#38aede" />
                </StyledButtonIcon>
            </StyledForm>

            <ItemList>
                {itemList.map((item) => (
                    <ItemWrapper key={item.id}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="radio" style={{ marginRight: '8px' }} />
                            {item.name}
                        </div>
                        <ItemDiv />
                    </ItemWrapper>
                ))}
            </ItemList>

            <Toaster position="bottom-right" richColors />
        </Layout>
    )
}
