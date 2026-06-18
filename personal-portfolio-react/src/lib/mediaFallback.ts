const STAGING_MEDIA_ROUTE = '/__portfolio_media_staging__';

const MEDIA_FALLBACKS: Record<string, string> = {
  '/images/Grocery_Bagger/yolo-training-scene.jpg':
    'GroceryBagger/YOLO Training Photo with Final Best Weight Mask + Bounding Box + Class & Confidence of Every Grocery in Scene. Same info seen by robot.jpg',
  '/images/Grocery_Bagger/early-manipulator-prototype.jpg':
    'GroceryBagger/Photo_Of_Full_Manipulator_Assembly_No_Base_Frame_No_Cameras_its_just_sitting_in_a_vice_grip_in_the_makerspace.thumbnail.jpg',
  '/images/Laser_Weeder/ucla-laser-weeder-system-hq.jpg':
    'LaserWeeder/Overview_ResearchPaper_First_Figure_Whole_Robot_System.jpg',
  '/videos/Grocery_Bagger/hero-pick-place-demo.mp4':
    'GroceryBagger/20minSpedUpContinousPickPlace(HERO VID).mp4',
  '/videos/Grocery_Bagger/dense-pack-demo.mp4': 'GroceryBagger/dense pack.mp4',
  '/videos/Grocery_Bagger/grocery-checkout-demo.mp4': 'GroceryBagger/grocery checkout.mp4',
  '/videos/Grocery_Bagger/system-walkthrough.mp4':
    'GroceryBagger/Overview Video with Explanation Slides and Heatmap Behind the Scene Explanation.mp4',
  '/videos/Laser_Weeder/control-sequence-overlay-h264.mp4':
    'LaserWeeder/ControlSequencePlasticPlantsPostOverlay.mp4',
  '/videos/Laser_Weeder/controlled-demo-two-perspective-h264.mp4':
    'LaserWeeder/RooftopDemoTwoPerspective.mp4',
};

function encodePathSegments(relativePath: string) {
  return relativePath
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

export function getMediaFallback(src?: string | null) {
  if (!src) {
    return null;
  }

  const relativePath = MEDIA_FALLBACKS[src];
  if (!relativePath) {
    return null;
  }

  return `${STAGING_MEDIA_ROUTE}/${encodePathSegments(relativePath)}`;
}
