import VideoPlayBiz from '@/components/biz/VideoBiz/page'
import { getVideoData } from '@/services/apiService'
import React from 'react'
import { cookies } from 'next/headers'

const VideoPlay = async ({ params }: any) => {
  const cookieStore = await cookies()
  const userToken = cookieStore.get('cineorb_user_token')?.value
  const { id } = await params
  if (id && userToken) {
    try {
      // console.log('video id', id)
      const response = await getVideoData(id, userToken)
      // console.log('video response', response)
      if (response.code === 200) {
        return <VideoPlayBiz videoData={response.data} />
      } else {
        return <div>id:{id} not found</div>
      }
    } catch (error) {
      console.error('Failed to get video data:', error)
      return <div>Failed to load video data</div>
    }
  } else {
    window.location.href = '/signin'
  }
}

export default VideoPlay
