"use client";

import Image from "next/image";
import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Modal from "@/components/ui/modal";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="flex flex-col md:flex-row items-center justify-around w-full">
        <div className="w-[50%] h-full">
          <Image
            src={product.image}
            alt={product.title}
            className="object-cover"
            width={300}
            height={300}
            loading="lazy"
          />
        </div>
        <Info data={product} />
      </div>
    </Modal>
  );
};

export default PreviewModal;
