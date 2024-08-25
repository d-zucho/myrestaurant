type Props = {
  className?: string
  children?: React.ReactNode
}

const MaxWidthWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 max-w-screen-2xl`}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
