(ns athens.tour.core
  (:require [reagent.core :as r]
            ["react-joyride" :default Joyride]
            [reagent.core :as reagent]
            [cljs.core.async :refer [<! timeout]]
            [re-frame.core :refer [subscribe dispatch]]))


(def r-joyride (r/adapt-react-class Joyride))


(def steps
  [{:target "header"
    :title (str "Configure Oliv for the different types of "
                "events on your calendar")
    :title-style {:width "450px"}
    :placement :center
    :tooltip-style {:width "600px"}
    :hide-footer? true
    :intro-comp? true

    :content
    [:div {:style {:text-align "left"}}
     "We have all different types of events on our calendar, "
     "like meetings, focus time, vacations, etc. Oliv can "
     "differentiate between these types and have different "
     "behavior for each one them."
     [:br] [:br]
     "For example, you can setup Oliv to:"
     [:br] [:br]
     "✅ Enable Do not Disturb when you are in meetings"
     [:br]
     "✅ Have Oliv auto respond and take messages for you when you "
     "are in focus mode"
     [:br]
     "✅ Customize Oliv’s auto response message when you are on a "
     "vacation to redirect incoming queries to somebody else, and so on."
     [:br] [:br]
     "Be creative! You can also customize Oliv’s behavior for "
     "every event on your calendar, but we’ll get to that in a bit."]

    :next-text "Configure event types"
    :skip-text "I have already configured my event types"}
   {:target ".node-page"
    :content [:div {:style {:text-align "left"}}
              [:h3 "We have all different types of events on our calendar, "]]
    :title "Event types"
    :placement :right}
   {:target ".roam-merge-icon"
    :content [:div {:style {:text-align "left"}}
              [:h3 "We have all different types of events on our calendar, "]]
    :portal? true
    :portal-style {:top 50
                   :right 30}
    :title "Event settings"
    :placement :right-start
    :tooltip-style {:width "350px"}}])

(def !tour-comp-index (r/atom 0))
(def !run (r/atom false))


(defn tour-callback
  [{:keys [action index type status]}]
  (cond
    (and (= type "step:after") (= index 2))
    (do (dispatch [:right-sidebar/close])
        (dispatch [:left-sidebar/open]))

    (and (= type "step:after") (= index 3))
    (do (dispatch [:left-sidebar/close])
        (dispatch [:right-sidebar/open]))

    (not (contains? #{3 4} index))
    (do (dispatch [:left-sidebar/close])
        (dispatch [:right-sidebar/close])))

  (js/setTimeout
    (fn []
      (when (= type "step:after")
        (reset! !tour-comp-index (+ index 1))))
    400))


(defn toggle []
  (reset! !run false)
  (reset! !run true))


(defn tour-comp
  []
  [:div
   [r-joyride
    {:steps (->> [{:content "Welcome to Athens!"
                   :target "body"
                   :placement "center"}
                  {:target "header"
                   :placement "bottom"
                   :content "Something"}
                  {:target ".node-page"
                   :placement "bottom"
                   :content (reagent/as-element
                              [:div {:style {:text-align "left"}}
                               [:h5 "More content"]])}
                  {:target ".left-sidebar"
                   :placement "right"
                   :content (reagent/as-element
                              [:div {:style {:text-align "left"}}
                               [:h5 "Showcase left sidebar"]])}
                  {:target ".right-sidebar"
                   :placement "left"
                   :content (reagent/as-element
                              [:div {:style {:text-align "left"}}
                               [:h5 "Showcase right sidebar"]])}
                  {:content "All done"
                   :target "body"
                   :placement "center"}]
                 (map-indexed (fn [i step]
                                (assoc step :index i
                                            :disableBeacon true))))
     :callback (fn [event]
                 (tour-callback
                   {:action (.. event -action)
                    :index (.. event -index)
                    :type (.. event -type)
                    :status (.. event -status)}))
     :continuous true
     :disableCloseOnEsc true
     :disableOverlayClose true
     :spotlightClicks false
     :showSkipButton true
     :disableScrolling true
     :showProgress true
     :styles {:options {:background-color "#e3ffeb"
                        :overlay-color "rgb(0 0 0 / 60%)"
                        :z-index "1071"}}
     :run @!run
     :stepIndex @!tour-comp-index}]])
