import dayjs from "dayjs";

const SEARCH_FIELDS = ["employeeNumber", "domainUserName", "fullName", "department", "position"];

export const filterBySearch = (rows, text) => {
    const term = (text || "").trim().toLowerCase();
    if (!term) return rows;
    return rows.filter((row) =>
        SEARCH_FIELDS.some((field) => String(row[field] ?? "").toLowerCase().includes(term)));
};

const dash = (value) => value || "-";

// Columnas comunes (orden solicitado) para empleados y supervisores
export const employeeInfoColumns = (t, nameTitle) => [
    { title: t("configuration.employeeNumber"), dataIndex: "employeeNumber", key: "employeeNumber", render: dash },
    { title: t("configuration.netkey"), dataIndex: "domainUserName", key: "domainUserName", render: dash },
    { title: nameTitle, dataIndex: "fullName", key: "fullName" },
    { title: t("configuration.shift"), dataIndex: "shift", key: "shift", render: dash },
    { title: t("configuration.department"), dataIndex: "department", key: "department", render: dash },
    { title: t("configuration.position"), dataIndex: "position", key: "position", render: dash },
    {
        title: t("configuration.hireDate"),
        dataIndex: "hireDate",
        key: "hireDate",
        render: (value) => (value ? dayjs(value).format("DD/MM/YYYY") : "-"),
    },
    { title: t("configuration.supervisorName"), dataIndex: "supervisorName", key: "supervisorName", render: dash },
];
