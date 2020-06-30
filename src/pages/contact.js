import React, { useRef, useState } from 'react'
import Layout from '../components/layout';
import Head from '../components/Head';
const Contact = () => {
    const inputStyle = () => {
        return {
            fontSize: '1.2em',
            outline: 'none',
            border: 'none',
            boxShadow: 'none',
        };
    };
    const [alert, setAlert] = useState(false);
    const [btnType, setBtnType] = useState(false);
    const emailEl = useRef();
    const msgEl = useRef();
    const nameEl = useRef();
    const sendFormData = async data => {
        var myHeaders = new Headers();
        var formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("message", data.msg);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        try {
            await fetch("https://formspree.io/xrgyajyn", requestOptions);
        } catch (e) {
            console.log(e);
        }
    }
    const resetForm = () => {
        emailEl.current.value = '';
        nameEl.current.value = '';
        msgEl.current.value = '';
        setBtnType(false);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 3000)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = emailEl.current.value;
        const name = nameEl.current.value;
        const msg = msgEl.current.value;
        resetForm();
        await sendFormData({ name, email, msg });
    };
    const onInputChange = () => {
        const email = emailEl.current.value;
        const name = nameEl.current.value;
        const msg = msgEl.current.value;
        if (email !== '' && name !== '' && msg !== '') {
            setBtnType(true);
        } else {
            setBtnType(false);
        }
    };
    return (
        <Layout >
            <Head title="Contact" />
            <div className="container text-center mt-2">
                <h1 className='display-4'>Contact Me</h1>
                <h3 style={{ fontWeight: '100' }}>Get in Touch</h3>
                <div className="container mt-3 text-center">
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-md-6 form-group mt-3">
                                <input onChange={onInputChange} ref={nameEl} style={inputStyle()} type="text" className="form-control" placeholder="Enter your Name" />
                            </div>
                            <div className="col-md-6 form-group mt-3">
                                <input onChange={onInputChange} ref={emailEl} style={inputStyle()} type="email" className="form-control" placeholder="Enter your Email Address" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="form-group col-sm-12">
                                <textarea onChange={onInputChange} ref={msgEl} style={inputStyle()} className="form-control" id="exampleTextarea" rows="5" placeholder="Eneter Your Message"></textarea>
                            </div>
                        </div>
                        <button style={inputStyle()} type={btnType ? 'submit' : 'button'} className={`${!btnType ? 'disabled' : ''} btn btn-sm btn-${!alert ? 'warning' : 'success op-1'}`}>{!alert ? 'Send Message' : 'Thanks'}</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Contact