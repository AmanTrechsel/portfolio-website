using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ResolutionScaler : MonoBehaviour
{
  [SerializeField]
  [Range(0.01f, 2.0f)]
  private float resolutionScale;

  private void Start()
  {
    SetResolutionScale(resolutionScale);
  }

  public void SetResolutionScale(float scale)
  {
    resolutionScale = scale;
    QualitySettings.resolutionScalingFixedDPIFactor = resolutionScale;
  }
}
