import type { FC } from 'react';
import Submit from './components/Submit';
import Top from './components/Top';
import Character from './components/character';
import Form from './components/form';
import useCharacter from './hooks/useCharacter';
import useForm from './hooks/useForm';
import authActions from '@/state/authState';

const NewUser: FC = () => {
  const user = authActions.useCurrentUser();
  const { value: email, updateValue: updateEmail } = useForm({ initialvalue: 'hoge' });
  const { value: name, updateValue: updateName } = useForm({ initialvalue: 'hoge' });
  const { checkedItems, checkedCharcter, handleChange } = useCharacter();
  return (
    <div>
      <Top />
      <Form email={email} updateEmail={updateEmail} name={name} updateName={updateName} />
      <Character checkedItems={checkedItems} handleChange={handleChange} checkboxSize={5} boxMergin="m-3" imageSize={70}/>
      <Submit />
    </div>
  );
};

export default NewUser;
