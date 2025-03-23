import VideoPlayBiz from '@/components/biz/VideoBiz/page'
import { getVideoData } from '@/services/apiService'
import React from 'react'

const VideoPlay = async ({ params }: any) => {
  const { id } = await params
  if (id) {
    try {
      // console.log('video id', id)
      const response = await getVideoData(id)
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
  }
  return <div>page not found</div>
}

export default VideoPlay
