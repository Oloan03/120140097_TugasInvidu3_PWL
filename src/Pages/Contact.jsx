import React, { useState} from 'react';

const Contact = props => {
    const [inputData, setInputData] = useState({
        email: "",
        pesan: "",
        sudahKenal: false,
    });
    const handleChange = (e ) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    };
    const [CountMail, setMessage] = useState(0);

    const handleMessage = (e ) => {
        e.preventDefault();
        setMessage(CountMail + 1);
    };

    return (
        <div className='countainer'>
            <h1 className='contact'>Contact</h1>
            <div class="contact-info">
                <p>Hp : +6282171292440 <br />
                Email : oloan.120140097@student.itera.ac.id
                </p>
            </div>
            <h3>Message</h3>
            <div className='contact-message'>
                <form>
                    <input type='text' name='nama' onChange={handleChange} value={inputData.nama} placeholder='Nama'/> <br />
                    <input type='text' name='email' onChange={handleChange} value={inputData.email} placeholder='Email'/> <br />
                    <textarea name='pesan' onChange={handleChange} value={inputData.pesan} placeholder='Pesan' maxlength="500"></textarea>
                    <br />
                    <button type='submit' value="Kirim" onClick={handleMessage}> Kirim </button>
                </form>
            </div>
            <p>Nomor Pesan : {CountMail}</p><br />
            <p>Nama : {inputData.name}</p><br />
            <p>Pesan: {inputData.pesan}</p><br />
        </div>
    );
};

export default Contact;