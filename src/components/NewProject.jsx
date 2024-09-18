import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

const NewProject = ({ handleSaveProject, handleCancelProject }) => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const dueRef = useRef();

    const modal = useRef();

    const handleSave = () => {
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const due = dueRef.current.value;

        if (name.trim() === '' || description.trim() === '' || due.trim() === '') {
            //show modal
            modal.current.open();
            return;
        }

        const projectData = {
            name,
            description,
            due,
        }

        handleSaveProject(projectData);
    }

    return (
        <>
            <Modal ref={modal} buttonCaption={'Close'}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">
                    Oops ... looks like you forgot to enter a value.
                </p>
                <p className="text-stone-600 mb-4">
                    Please make sure you provide a valid value for every input field.
                </p>
            </Modal>
            <div className='mt-16 w-[35rem] mx-10'>
                <div className='flex gap-4 justify-end items-center my-4'>
                    <div>
                        <button onClick={handleSave} className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-50'>Add</button>
                    </div>
                    <div>
                        <button className='' onClick={handleCancelProject}>Cancel</button>
                    </div>
                </div>

                <div>
                    <Input ref={nameRef} label={'Project Name'} type={'text'} />
                    <Input ref={descriptionRef} label={'Project Description'} textarea />
                    <Input ref={dueRef} label={'Project Deadline'} type={'date'} />
                </div>
            </div>
        </>
    )
}

export default NewProject