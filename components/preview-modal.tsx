"use client";

import Info from "@/components/info";
import Modal from "@/components/ui/modal";
import Image from "next/image";
import { onClose } from "@/redux/features/modalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const PreviewModal = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.modalReducer.data);
  const isOpen = useAppSelector((state) => state.modalReducer.isOpen);

  if (!product) {
    return null;
  }

  return (
    <Modal open={isOpen} onClose={() => dispatch(onClose())}>
      <div className="flex flex-col md:flex-row items-center justify-around w-full">
        <div className="w-[50%] h-full">
          <Image
            src={product.image}
            alt={product.title}
            className="object-cover"
            width={300}
            height={300}
            priority
          />
        </div>
        <Info data={product} />
      </div>
    </Modal>
  );
};

export default PreviewModal;
