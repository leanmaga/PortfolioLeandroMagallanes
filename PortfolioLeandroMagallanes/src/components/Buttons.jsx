//cv
import CV from '../assets/pdf/cv.pdf';

const Buttons = () => {
  return (
    <>
        <button className='btn btn-lg'>
            <a href="#contact">Contact me</a>
        </button>
        <a className='text-gradient btn-link' href={CV} download='Leandro Magallanes Curriculum Vitae'>
            My Curriculum
        </a>
    </>
  )
}

export default Buttons