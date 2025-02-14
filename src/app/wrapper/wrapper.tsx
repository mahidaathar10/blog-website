

interface Iwrapper{
  children: React.ReactNode
}
const Wrapper: React.FC<Iwrapper> = ({children}) => {
  return (
    <div className="max-w-screen-lg mx-auto px-6">
            {children}
        </div>
  )
}

export default Wrapper



