import {ChangeEvent, FC, FormEvent, useState} from 'react';
import styles from './record.module.scss';
import Heading from "@/ui/heading/Heading";


const Record: FC = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues((prevValues:any) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Отправка данных на сервер
        console.log(formValues);
    };


    return (
        <div className={'container flex-col flex items-center py-layout '}>
            <form action="" onSubmit={handleSubmit}>
            <Heading title={'Создание поста'} className={' 3xl lg:text-5xl'}/>
            <Heading title={'Заголовок'} />
          <input type="text" placeholder={'title'} className={'w-320'}
                 name="title"
                 value={formValues.lastName}
                 onChange={handleChange}/>
     <Heading title={'Описание'} />
          <input type="text" placeholder={'title'} className={'w-320'}
                 name="content"
                 value={formValues.email}
                 onChange={handleChange}/>
            <Heading title={'Фото'} />
            <div className={'w-320 bg-gray-600 rounded-2xl mb-2'}><input type="file" className={'  file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semiboldfile:bg-white file:text-violet-700 hover:file:bg-violet-100'}/></div>
                <button className={'w-320 py-2  bg-gray-600 rounded-2xl' } >Создать</button>
            </form>
        </div>
    );
};

export default Record;