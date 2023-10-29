const UserIconAvatar = ({
  className,
  ...props
}: JSX.IntrinsicElements['button']) => {
  return (
    <button className={`avatar ${className ? className : ''}`} {...props}>
      <img
        src='https://s3-alpha-sig.figma.com/img/ce62/3c01/331e494656939cd5e490202dd312c2f1?Expires=1699228800&Signature=cifzdzmXGGmAjFxB20GPj0Z7av7SogZ1E-hM9MEQk12LkLAIuS~-s~AmM8-sNe-~qL84NsEj4ohVyiMX8utrj2RMX6WDpaBoXrL5beUtvujrAnp54X06V638WyfWSJ3LFxjDmLIBbbuArTJQN6PXlzhtTxN07ewRxr2J2Lhl0lRQJSY5y5W10fXxDd59ba16CoKPQ40Lhq~s1-WGUPN4--WKojc63cHmXA-wMreyJe4s3Ctr3qmFUgPO4ZeI-q31xYsrZDCHhnGwzcBhgOk-f54ytSPqsQXxI1GJYc~ldc3PYE~GBitqIHZM70M-x7jUGDZqe6BjPaRulgDaNE443w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        alt='avatar'
        width={130}
        height={130}
      />
    </button>
  );
};

export default UserIconAvatar;
