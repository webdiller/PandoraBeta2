import React, { useState } from 'react';
import { Modal } from 'antd';
import { RegisterForm } from "../../modules";
import { LoginForm } from "../../modules";

export default function ModalRegistration({activeRegistration}) {

    const [open, setOpen] = useState(activeRegistration);

    const handleOk = e => {
        console.log(e);
        setOpen(false);
    };

    const handleCancel = e => {
        console.log(e);
        setOpen(false);
    };

    return (
        <Modal
            title="Регистрация"
            visible={open}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <RegisterForm />
            <LoginForm />

        </Modal>
    );
}
