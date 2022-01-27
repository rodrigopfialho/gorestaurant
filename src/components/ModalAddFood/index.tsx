import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { useState } from 'react';

interface FoodProps {
    name: string;
    description: string;
    price: string;
    image: string;
    id: number;
    available:boolean;
}

interface ModalAddFoodProps {
    setIsOpen: () => void;
    handleAddFood: (food: FoodProps) => Promise<void>;
    isOpen: boolean;
}

export function ModalAddFood({ isOpen, setIsOpen, handleAddFood } : ModalAddFoodProps) {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");


    async function handleSubmit(event: any) {
        event.preventDefault()

        const food = {
          id: Math.floor(Math.random()*100+1),
          name,
          image,
          price,
          available:true,
          description
        }

        handleAddFood(food)
        setIsOpen()
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <Form onSubmit={handleSubmit}>
            <h1>Novo Prato</h1>
            <Input name="image" placeholder="Cole o link aqui" setValue={setImage} value={image}/>

            <Input name="name" placeholder="Ex: Moda Italiana" setValue={setName} value={name}/>
            <Input name="price" placeholder="Ex: 19.90" setValue={setPrice} value={price} />

            <Input name="description" placeholder="Descrição" setValue={setDescription} value={description}/>
            <button type="submit" data-testid="add-food-button">
              <p className="text">Adicionar Prato</p>
              <div className="icon">
                <FiCheckSquare size={24} />
              </div>
            </button>
          </Form>
        </Modal>
    );

}