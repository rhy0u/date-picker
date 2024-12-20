import { useTranslations } from "next-intl"

export const Separator = () => {
  const t = useTranslations()

  return (
    <div className="flex items-center justify-center my-2">
      <div className="border-t border-gray-300 flex-grow"></div>{" "}
      <span className="mx-4 text-gray-500">{t("Components.or")}</span>{" "}
      <div className="border-t border-gray-300 flex-grow"></div>{" "}
    </div>
  )
}
