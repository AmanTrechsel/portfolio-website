using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonitorManager : MonoBehaviour
{
  [SerializeField]
  private Rect monitorRect;
  [SerializeField]
  private Camera renderCamera;

  private Camera mainCamera;

  private void Start()
  {
    mainCamera = Camera.main;
  }

  private void LateUpdate()
  {
    if (Input.GetMouseButtonDown(0))
    {
      RaycastHit hit;
      if (Physics.Raycast(mainCamera.ScreenPointToRay(Input.mousePosition), out hit))
      {
        if (hit.collider.CompareTag("PC"))
        {
          if (hit.point.z < monitorRect.x && hit.point.z > monitorRect.width && hit.point.y < monitorRect.y && hit.point.y > monitorRect.height)
          {
            Vector3 hitPoint = new Vector3((1 - (monitorRect.width - hit.point.z) / (monitorRect.width - monitorRect.x)) * renderCamera.pixelWidth, (monitorRect.height - hit.point.y) / (monitorRect.height - monitorRect.y) * renderCamera.pixelHeight, 2);
          }
        }
      }
    }
  }
}
