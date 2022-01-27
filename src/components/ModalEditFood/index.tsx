import { Component, createRef, useEffect, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';

interface FoodProps {
    id: number;
    name: string;
    description: string;
    price: string;
    available: boolean;
    image: string;
}

interface ModalEditFoodProps {
    setIsOpen: () => void;
    isOpen: boolean;
    editingFood:FoodProps;
    handleUpdateFood: (food: FoodProps) => Promise<void>;
}

export function ModalEditFood({setIsOpen, isOpen, handleUpdateFood, editingFood} : ModalEditFoodProps) {
    
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setName(editingFood.name)
        setImage(editingFood.image)
        setPrice(editingFood.price)
        setDescription(editingFood.description)
    }, [isOpen]);

    async function handleSubmit(event: any) {
        event.preventDefault()

        const food = {
            id: editingFood.id,
            name,
            image,
            price,
            available:editingFood.available,
            description
        }

        handleUpdateFood(food);
        setIsOpen();

    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form onSubmit={handleSubmit}>
                <h1>Editar Prato</h1>
                <Input name="image" placeholder="Cole o link aqui" value={image} setValue={setImage} />

                <Input name="name" placeholder="Ex: Moda Italiana" value={name} setValue={setName} />
                <Input name="price" placeholder="Ex: 19.90" value={price} setValue={setPrice}/>

                <Input name="description" placeholder="Descrição" value={description} setValue={setDescription} />

                <button type="submit" data-testid="edit-food-button">
                    <div className="text">Editar Prato</div>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
        </Form>
        </Modal>
    );
}