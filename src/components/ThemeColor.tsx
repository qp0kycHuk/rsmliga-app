import { AdminSelect } from '@admin/components/AdminSelect'
import { Color, colors, useThemeContext } from '@layouts/ThemeContext'
import { twMerge } from 'tailwind-merge'

export function ThemeColor() {
  const { color, changeColor } = useThemeContext()

  return (
    <div>
      <AdminSelect
        value={color}
        items={Object.keys(colors)}
        onChange={(key) => changeColor(key as Color)}
        underline={false}
        itemsClassName="w-auto z-6"
        touchSupport={false}
        anchor="top"
        renderItem={(key) => (
          <>
            <div className={twMerge('size-5 rounded bg-primary', colors[key as Color])}></div>
          </>
        )}
      />
    </div>
  )
}
