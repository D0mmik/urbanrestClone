export default function Showcase({children, text} : {children: string, text?: string}) {
  return (
    <div className="bg-bright-blue text-white p-5 rounded-3xl w-full text-center">
      <p className="text-4xl">{children}</p>
      <p className="font-extralight text-sm">{text}</p>
    </div>
  )
}
