using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Orbit : MonoBehaviour
{
  [SerializeField]
  private float rotationSpeed;

  private void Update()
  {
    transform.Rotate(transform.up, rotationSpeed * Time.deltaTime);
  }
}
