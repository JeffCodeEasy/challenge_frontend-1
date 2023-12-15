
export const Article = ({img,number, title,text}) => {
  return (
    <article className='flex  h-[162px] md:w-[343px]  md:flex-grow'>
        <div className='w-[100px] flex-none'>
            <img src={img} alt="Imagen Second" />
        </div>
        <div className='pl-6'>
            <p className='text-Grayishblue text-3xl mb-[18px] font-bold'>{number}</p>
            <h2 className='mb-[18px] hover:text-SoftOrange cursor-pointer font-bold'>{title}</h2>
            <p className='text-Darkgrayishblue'>{text}</p>
        </div>
    </article>
  )
}
