import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Right() {
return (
  <div className="flex flex-col w-full p-6 rounded-xl bg-white shadow-lg text-black h-full overflow-y-scroll">
    <Accordion type="single" collapsible className="w-full">
      {/* Accordion Item 1: Accessibility */}
      <AccordionItem value="item-1">
        <AccordionTrigger>How is NeuralNet accessible?</AccordionTrigger>
        <AccordionContent>
          NeuralNet is designed to be accessible to both researchers and practitioners. 
          Our framework follows WAI-ARIA accessibility guidelines, ensuring compatibility 
          with assistive technologies. The user interface is simple, intuitive, and can 
          be navigated using keyboard shortcuts for those with visual impairments.
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 2: Explainable AI */}
      <AccordionItem value="item-2">
        <AccordionTrigger>What does Explainable AI mean in NeuralNet?</AccordionTrigger>
        <AccordionContent>
          In NeuralNet, Explainable AI (XAI) refers to our commitment to making AI 
          models transparent and interpretable. While traditional machine learning models 
          often function as black boxes NeuralNet uses explainable techniques to visualize 
          and interpret the decision-making process of multi-class motor imagery classification. 
          This helps researchers better understand the brain-computer interaction and improve model performance.
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 3: Multi-Class Motor Imagery Classification */}
      <AccordionItem value="item-3">
        <AccordionTrigger>What is Multi-Class Motor Imagery Classification?</AccordionTrigger>
        <AccordionContent>
          Multi-Class Motor Imagery Classification is a key component of brain-computer 
          interfaces (BCIs), where the brain activity associated with different motor tasks 
          is classified into multiple categories. NeuralNets framework uses deep learning models 
          such as convolutional neural networks (CNNs) and recurrent neural networks (RNNs) 
          to classify motor imagery signals from EEG data across various classes, improving accuracy 
          in real-time BCI applications.
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 4: Data Privacy and Ethics */}
      <AccordionItem value="item-4">
        <AccordionTrigger>How does NeuralNet handle data privacy?</AccordionTrigger>
        <AccordionContent>
          NeuralNet adheres to strict data privacy protocols. EEG data is anonymized, and only 
          the necessary features related to motor imagery classification are used. We follow ethical 
          guidelines and ensure that any data used in our research is either publicly available or 
          obtained with consent. Additionally, our models are designed to be transparent, with clear 
          explanations of how input data leads to specific outputs.
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 5: Real-World Applications */}
      <AccordionItem value="item-5">
        <AccordionTrigger>What are the real-world applications of NeuralNet?</AccordionTrigger>
        <AccordionContent>
          NeuralNets explainable AI framework can be applied in various real-world domains:
          - **Healthcare**: Enabling patients with motor disabilities to control devices through thought.
          - **Neurofeedback**: Training individuals to control brain activity for cognitive improvement.
          - **Assistive Technologies**: Creating more responsive and adaptive BCI systems for everyday use.
          - **Research**: Understanding brain dynamics during motor imagery tasks to explore brain functions more effectively.
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 6: Model Training & Deployment */}
      <AccordionItem value="item-6">
        <AccordionTrigger>How is the NeuralNet model trained and deployed?</AccordionTrigger>
        <AccordionContent>
          The NeuralNet model is trained on large EEG datasets, focusing on multi-class motor imagery tasks. 
          We use a combination of deep learning techniques, including convolutional neural networks (CNNs) 
          for feature extraction and recurrent networks (RNNs) for sequence modeling. After training, 
          the model is deployed in a way that allows real-time classification of brain activity for various 
          motor tasks. Our framework also provides interpretability tools that allow users to visualize 
          which brain regions contribute to the classification results.
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 7: Evaluation and Performance */}
      <AccordionItem value="item-7">
        <AccordionTrigger>How is NeuralNet evaluated?</AccordionTrigger>
        <AccordionContent>
          NeuralNets performance is evaluated using a combination of accuracy metrics (such as classification accuracy, 
          precision, recall, and F1 score) on test datasets from multiple subjects performing different motor imagery tasks. 
          Additionally, we evaluate the interpretability of the model using visualizations that highlight the decision-making 
          process, allowing us to fine-tune the model for better results in real-world applications.
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 8: Future Directions */}
      <AccordionItem value="item-8">
        <AccordionTrigger>What are the future directions for NeuralNet?</AccordionTrigger>
        <AccordionContent>
          NeuralNet is constantly evolving to improve its capabilities. In the future, we aim to:
          - Expand the number of classes for motor imagery tasks, improving the versatility of BCIs.
          - Integrate more advanced explainable AI techniques to provide deeper insights into neural signals.
          - Collaborate with healthcare providers to implement the system in clinical settings for real-world BCI applications.
          - Enhance model robustness to handle real-world noisy EEG data for better usability.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
}
