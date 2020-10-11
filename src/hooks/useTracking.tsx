import { Analytics } from 'analytics'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import googleAnalytics from './googleAnalytics';


let GaTrackingId = process.env.GA_MEASUREMENT_ID;

const analytics = Analytics({
    app: 'emf-five',
    plugins: [
        googleAnalytics({
        trackingId: GaTrackingId
      })
    ]
  })
   

export const useTracking = (
  trackingId: string | undefined = GaTrackingId
) => {
  const { listen } = useHistory()

  useEffect(() => {
    const unlisten = listen((location) => {
    //   if (!window.gtag) return
      if (!trackingId) {
        console.log(
          'Tracking not enabled, as `trackingId` was not given and there is no `GA_MEASUREMENT_ID`.'
        )
        return
      }
    analytics.page();
    //   window.gtag('config', trackingId, { page_path: location.pathname })
    })

    return unlisten
  }, [trackingId, listen])
}