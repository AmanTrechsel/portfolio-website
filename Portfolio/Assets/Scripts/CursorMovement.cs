using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CursorMovement : MonoBehaviour
{
  [SerializeField]
  private Vector2 minPosition, maxPosition;

  private float yPos;

  private void Start()
  {
    yPos = transform.position.y;
  }

  private void FixedUpdate()
  {
    Vector3 mousePos = Input.mousePosition;
    {
      float xPos = mousePos.y / Screen.height * (maxPosition.y - minPosition.y) + minPosition.y;
      float zPos = mousePos.x / Screen.width * (maxPosition.x - minPosition.x) + minPosition.x;
      transform.position = new Vector3(xPos, yPos, zPos);
    }
  }
}
