import { getIndexData } from '@/services/apiService'
import PageBiz from '@/components/biz/PageBiz/PageBiz'

const Page = async () => {
  const response = await getIndexData()
  return <PageBiz dataIndex={response} />
}

export default Page
