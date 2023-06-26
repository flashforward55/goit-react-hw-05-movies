import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => (
  <LoaderWrapper>
    <Oval color="#00BFFF" secondaryColor="#00BFFF" height={80} width={80} />
  </LoaderWrapper>
);
export default Loader;
