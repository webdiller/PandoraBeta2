import React, { useState } from 'react';
import { Modal } from 'antd';
import { LoginForm } from "../../modules";

export default function ModalAuth() {

    const [open, setOpen] = useState(false);

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
            title="Авторизация"
            visible={open}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <LoginForm />

        </Modal>
    );
}
