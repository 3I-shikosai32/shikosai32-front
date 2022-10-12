import type { FC } from 'react';
import Character from './component/character/character.presenter';
import Form from './component/form/form.presenter';
import Submit from './component/send/send.container';
import Top from './component/upper/upper.presenter';
import useCharacter from './hook/use-character.hook';
import useForm from './hook/use-form.hook';
import { Layout } from '@/presentation/layout/layout.container';
import authActions from '@/state/auth/auth-state';

const NewUser: FC = () => {
  const user = authActions.useCurrentUser();
  const id = user?.uid ? user.uid : '';
  const { value: email, updateValue: updateEmail } = useForm({ initialvalue: user?.email });
  const { value: name, updateValue: updateName } = useForm({ initialvalue: user?.displayName });
  const { checkedItems, checkedCharcter, handleChange } = useCharacter();

  return (
    <Layout>
      <Top />
      <Form email={email} updateEmail={updateEmail} name={name} updateName={updateName} />
      <Character checkedItems={checkedItems} handleChange={handleChange} />
      <Submit email={email} name={name} character={checkedCharcter} id={id} />
    </Layout>
  );
};

export default NewUser;
