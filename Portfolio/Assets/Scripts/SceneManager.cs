using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering.PostProcessing;

public class SceneManager : MonoBehaviour
{
  [SerializeField]
  private GameObject[] monitors;
  [SerializeField]
  private Transform[] cameraPositions;
  [SerializeField]
  private float lerpTime;
  [SerializeField]
  private GameObject cursor;
  [SerializeField]
  private CursorMovement cursorMovement;
  [SerializeField]
  private PostProcessVolume postProcessingVolume;
  [SerializeField]
  private GameObject particles;

  private Transform mainCamera;
  private Camera mainCameraComponent;
  private Vector3 cameraOffset = new Vector3(-5.187f, 2.149f, 0.066f);
  private Vector3 cameraRotationOffset = new Vector3(9.13f, 90, 0);
  private Vector3 targetPosition, targetRotation;
  private int currentCameraIndex;

  private void Start()
  {
    monitors[0].SetActive(false);
    monitors[1].SetActive(true);
    particles.SetActive(true);
    mainCameraComponent = Camera.main;
    mainCamera = mainCameraComponent.transform;
    cursor.SetActive(false);
    cursorMovement.enabled = false;
    SetCameraPosition(0);
    Application.ExternalCall("loaded");
#if !UNITY_EDITOR && UNITY_WEBGL
    WebGLInput.captureAllKeyboardInput = false;
#endif
  }

  private void LateUpdate()
  {
    if (Input.GetMouseButtonDown(0))
    {
      RaycastHit hit;
      if (Physics.Raycast(mainCameraComponent.ScreenPointToRay(Input.mousePosition), out hit))
      {
        if (hit.collider.CompareTag("Desk"))
        {
          SetCameraPosition(1);
        }
        else if (hit.collider.CompareTag("PC"))
        {
          if (currentCameraIndex == 0)
          {
            SetCameraPosition(1);
          }
          else if (currentCameraIndex == 1)
          {
            SetCameraPosition(2);
          }
        }
      }
      else if (currentCameraIndex > 0)
      {
        SetCameraPosition(currentCameraIndex - 1);
      }
    }
  }

  private void SetCameraPosition(int index)
  {
    if (index == 2)
    {
      Application.ExternalCall("hideOverlay");
      monitors[0].SetActive(true);
      monitors[1].SetActive(false);
      StartCoroutine(UpdatePostProcessingWeight(0));
    }
    else if (index == 1 && currentCameraIndex == 2)
    {
      StartCoroutine(UpdatePostProcessingWeight(1));
      Application.ExternalCall("showOverlay");
      monitors[0].SetActive(false);
      monitors[1].SetActive(true);
      particles.SetActive(true);
    }
    currentCameraIndex = index;
    if (currentCameraIndex == 0)
    {
      mainCamera.parent = cameraPositions[currentCameraIndex];
      targetPosition = cameraOffset;
      targetRotation = cameraRotationOffset;
    }
    else
    {
      mainCamera.parent = null;
      targetPosition = cameraPositions[currentCameraIndex].position;
      targetRotation = cameraPositions[currentCameraIndex].eulerAngles;
    }
    StartCoroutine(MoveCamera());
  }

  private IEnumerator MoveCamera()
  {
    float time = 0;
    Vector3 startPosition = mainCamera.position;
    Quaternion startRotation = mainCamera.rotation;

    while (time < lerpTime)
    {
      time += Time.deltaTime;
      mainCamera.localPosition = Vector3.Lerp(startPosition, targetPosition, time / lerpTime);
      mainCamera.localRotation = Quaternion.Lerp(startRotation, Quaternion.Euler(targetRotation), time / lerpTime);
      yield return null;
    }

    mainCamera.localPosition = targetPosition;
    mainCamera.localRotation = Quaternion.Euler(targetRotation);
    
    cursor.SetActive(currentCameraIndex != 0);
    cursorMovement.enabled = currentCameraIndex != 0;
  }

  private IEnumerator UpdatePostProcessingWeight(float newWeight)
  {
    float time = 0;
    float newFov = newWeight == 0 ? 24 : 27;
    float startWeight = postProcessingVolume.weight;

    while (time < lerpTime)
    {
      time += Time.deltaTime;
      postProcessingVolume.weight = Mathf.Lerp(startWeight, newWeight, time / lerpTime);
      mainCameraComponent.fieldOfView = Mathf.Lerp(mainCameraComponent.fieldOfView, newFov, time / lerpTime);
      yield return null;
    }

    postProcessingVolume.weight = newWeight;
    mainCameraComponent.fieldOfView = newFov;
    monitors[0].SetActive(false);
    particles.SetActive(newWeight == 1);
  }
}
