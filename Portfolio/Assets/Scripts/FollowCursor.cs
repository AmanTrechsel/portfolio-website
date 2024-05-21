using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FollowCursor : MonoBehaviour
{
  [SerializeField]
  private float distanceFromCamera;

  private Camera mainCamera;
  private Display display;
  private Vector2 minPosition, maxPosition;

  private void Start()
  {
    mainCamera = Camera.main;
  }

  private void LateUpdate()
  {
    Vector3 mousePos = Input.mousePosition;
    {
      mousePos.z = distanceFromCamera;
      transform.position = mainCamera.ScreenToWorldPoint(mousePos);
    }
  }
}