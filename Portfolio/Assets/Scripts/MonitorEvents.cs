using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;

public class MonitorEvents : MonoBehaviour
{
  private UIDocument uIDocument;
  private Button startButton;

  private void Awake()
  {
    uIDocument = GetComponent<UIDocument>();

    startButton = uIDocument.rootVisualElement.Q<Button>("Start");
    startButton.RegisterCallback<ClickEvent>(e => OnStartButtonClicked());
  }

  private void OnDisable()
  {
    startButton.UnregisterCallback<ClickEvent>(e => OnStartButtonClicked());
  }

  private void OnStartButtonClicked()
  {
    Debug.Log("Start button clicked");
  }
}
