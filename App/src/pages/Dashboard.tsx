import React, { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { api } from "../services/api";

import { formatCurrency } from "../utils/FormatCurrency";
import searchSVG from "../assets/search.svg"
import { CATEGORIES } from "../utils/categories";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RefundItem, type RedunItemProps } from "../components/RefundItem";
import { Pagination } from "../components/Pagination";


export function Dasboard() {

  const [name, setName] = useState("")
  const [page, setPage] = useState(1)
  const [totalOfPage, setTotalOfpage] = useState(0)
  const [refund, setRefund] = useState<RedunItemProps[]>([])
  const PER_PAGE = 5

  async function fetchRefunds() {
    try {
      const response = await api.get<RedundsPaginationApiResponse>(
        `/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`
      )
      setRefund(
        response.data.refunds.map((refund) => ({
          id: refund.id,
          name: refund.user.name,
          description: refund.name,
          amout: formatCurrency(refund.amount),
          categoryImg: CATEGORIES[refund.category].icon,
        }))
      )
      setTotalOfpage(response.data.pagination.totalPages)
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message)
      }
      alert("Não foi possivel carregar")
    }
  }
  function onSubmit(e: React.FormEvent){
    e.preventDefault()
    fetchRefunds()
  }
  function handlePagination(action: "next" | "previous") {
    setPage((prevpage) => {
      if (action === "next" && prevpage < totalOfPage) {
        return prevpage + 1
      }
      if (action === "previous" && prevpage > 1) {
        return prevpage - 1
      }
      return prevpage
    })
  }

  useEffect(() => {
    fetchRefunds()
  }, [page])
  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px] ">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form onSubmit={onSubmit}
        className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-3 mt-6" >
        <Input placeholder="Pesquisar pelo nome" onChange={(e) => setName(e.target.value)} />

        <Button type="submit" variant="icon"><img src={searchSVG} alt="Icone de pesquisar" className="w-5" /></Button>
      </form>
      <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">

        {refund.map((item) => (
          <RefundItem key={item.id} data={item} href={`/refund/${item.id}`} />
        ))}
      </div>

      <Pagination current={page} total={totalOfPage} onNext={() => handlePagination("next")} onPrevious={() => handlePagination("previous")} />
    </div>
  )
} 