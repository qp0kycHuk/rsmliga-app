export function DialogHeader({ children }: React.PropsWithChildren) {
  return (
    <div className="p-7 bg-gray dark:bg-transparent rounded-t-xl print:bg-transparent print:p-0 print:mb-6">
      {children}
    </div>
  )
}
